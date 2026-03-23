export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { firstName, lastName, email } = body

  if (!firstName || !lastName || !email) {
    throw createError({ statusCode: 400, message: 'Champs requis manquants' })
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) {
    console.warn('SLACK_WEBHOOK_URL not configured — skipping Slack notification')
    return { success: true }
  }

  await $fetch(webhookUrl, {
    method: 'POST',
    body: {
      text: `📬 Nouvelle inscription liste d'attente !\n\n*Prénom :* ${firstName}\n*Nom :* ${lastName}\n*Email :* ${email}`,
    },
  })

  return { success: true }
})
