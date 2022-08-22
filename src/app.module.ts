import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ReceitaModule } from './receita/receita.module';
import { DespesaModule } from './despesa/despesa.module';


@Module({
  imports: [
    AuthModule,
    UserModule,
    ReceitaModule, 
    DespesaModule
  ]
})

export class AppModule {}