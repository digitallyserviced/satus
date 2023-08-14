const fetchHubspotForms = async () => {
  try {
    const forms = await fetch(
      `https://api.hubapi.com/marketing/v3/forms/?limit=1000`,
      {
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        },
      },
    )
    const response = await forms.json()

    response.results.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase()

      if (fa < fb) {
        return -1
      }
      if (fa > fb) {
        return 1
      }
      return 0
    })

    return response
  } catch (e) {
    console.error(e)
  }

  success(
    res,
    response.results.map((form) => ({ id: form.id, name: form.name })),
  )
}

export default async function get(req, res) {
  try {
    const data = await fetchHubspotForms()

    res.status(200).json(data)
  } catch (e) {
    res.status(404).json(e.toString())
  }
}
