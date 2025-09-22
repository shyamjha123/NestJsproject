import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './exception/app-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // register custom filter in global level
  // const httpAdaptorHost = app.get(HttpAdapterHost)
  // app.useGlobalFilters(new AppExceptionFilter(httpAdaptorHost))
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
