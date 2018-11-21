/* eslint-env browser */
async function svgr(code, options = {}) {
  try {
    const res = await fetch('https://svgr.now.sh/api/svgr', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({ code, options }),
    })
    const json = await res.json()
    if (json.error) throw new Error(json.error)
    return json.output
  } catch (error) {
    console.log(error)
  }
}

export default svgr
