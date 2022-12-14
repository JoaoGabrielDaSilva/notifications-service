import { Content } from './content'

const makeSut = (value: string = 'Você recebeu uma notificação') => {
  const content = new Content(value)

  return content
}

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const sut = makeSut()

    expect(sut).toBeTruthy()
  })

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => makeSut('123')).toThrow()
  })
  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => makeSut('a'.repeat(241))).toThrow()
  })
})
