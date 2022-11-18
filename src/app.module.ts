import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: [null, 'local', 'dev'].some(
        (env) => process.env.NODE_ENV == env,
      ),
      autoSchemaFile: true,
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
