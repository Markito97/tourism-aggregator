import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { google } from "googleapis";
import { Options } from "nodemailer/lib/smtp-transport";

@Injectable()
export class MailService {
  constructor(
    private readonly mailService: MailerService,
    private readonly configService: ConfigService
  ) {}

  private async setTransport() {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      this.configService.get("CLIENT_ID"),
      this.configService.get("CLIENT_SECRET"),
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken: string = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });

    const config: Options = {
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: this.configService.get("EMAIL"),
        clientId: this.configService.get("CLIENT_ID"),
        clientSecret: this.configService.get("CLIENT_SECRET"),
        accessToken,
      },
    };
    this.mailService.addTransporter("gmail", config);
  }

  public async sendMail() {
    await this.setTransport();
    this.mailService
      .sendMail({
        transporterName: "gmail",
        to: "marksorokindev97@gmail.com",
        from: "jetblade0gmail.com",
        subject: "Verficiaction Code",
        template: "action",
        context: {
          code: "38320",
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
