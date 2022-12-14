import { Controller, Get } from '@nestjs/common'
import { Body, Post } from '@nestjs/common/decorators'
import { PrismaService } from './prisma.service'
import { CreateNotificationBody } from './create-notification-body'

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany()
  }

  @Post()
  create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body

    return this.prisma.notification.create({
      data: {
        recipientId,
        content,
        category,
      },
    })
  }
}