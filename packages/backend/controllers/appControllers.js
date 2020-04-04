const calculateLoan = async (req, res) => {
  return new Promise(res => {
    setTimeout(
      () =>
        res([
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Billy' },
        ]),
      1000,
    )
  })
}

module.exports = { calculateLoan }
