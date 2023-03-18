import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HouseModule } from "./houses/houses.module";
import { FilesModue } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { MailModule } from "./mail/mail.module";
import { ConfigModule } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

@Module({
  imports: [
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: "smtps://user@domain.com:pass@smtp.domain.com",
      template: {
        dir: process.cwd() + "/templates/",
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    HouseModule,
    FilesModue,
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/houses"),
  ],
})
export class AppModule {}
