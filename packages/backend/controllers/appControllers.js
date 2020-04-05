const calculateLoan = async (req, res) => {
  console.log('backend', req.body)

  setTimeout(() => {
    res.json([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Billy' },
    ])
  }, 1000)
}

module.exports = { calculateLoan }
