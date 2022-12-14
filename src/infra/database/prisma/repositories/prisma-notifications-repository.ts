import { Injectable } from '@nestjs/common'
import { Notification } from 'src/application/entities/notification'
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        category: notification.category,
        content: notification.content.value,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    })
  }
}
