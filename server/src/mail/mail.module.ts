import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { ConfigService } from "@nestjs/config";
import { MailControler } from "./mail.controller";

@Module({
  imports: [
    // MailerModule.forRoot({
    //   transport: "smtps://user@domain.com:pass@smtp.domain.com",
    //   template: {
    //     dir: process.cwd() + "/templates/",
    //     adapter: new HandlebarsAdapter(),
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
    // MailerModule.forRootAsync({
    //   useFactory: () => ({
    //     transport: "smtps://user@domain.com:pass@smtp.domain.com",
    //     template: {
    //       dir: process.cwd() + "/templates/",
    //       adapter: new HandlebarsAdapter(),
    //       options: {
    //         strict: true,
    //       },
    //     },
    //   }),
    // }),
  ],
  providers: [MailService, ConfigService],
  controllers: [MailControler],
})
export class MailModule {}
