import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { ConfigService } from "@nestjs/config";
import { MailControler } from "./mail.controller";

@Module({
  providers: [MailService, ConfigService],
  controllers: [MailControler],
})
export class MailModule {}
