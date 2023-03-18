import { Controller, Get } from "@nestjs/common";
import { MailService } from "./mail.service";

@Controller("mail")
export class MailControler {
  constructor(readonly mailService: MailService) {}

  @Get()
  public sendMail() {
    this.mailService.sendMail();
  }
}
