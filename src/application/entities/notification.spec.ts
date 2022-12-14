import { Content } from './content'
import { Notification } from './notification'

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const sut = new Notification({
      recipientId: 'example-recipient-id',
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
      readAt: new Date(),
    })

    expect(sut).toBeTruthy()
  })
})
