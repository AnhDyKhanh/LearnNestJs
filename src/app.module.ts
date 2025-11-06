import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'your_password',
      database: 'core_service_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Chỉ dùng cho dev, không nên bật trên production
    }),
  ],
})
export class AppModule {}
