import { Module } from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import { PrismaService } from 'prisma/prisma.service';
import { ChannelsRepository } from './repository/channels.repository';

@Module({
  controllers: [ChannelsController],
  providers: [ChannelsService, PrismaService, ChannelsRepository],
})
export class ChannelsModule {}
