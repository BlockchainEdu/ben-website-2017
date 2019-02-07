/* global QRCode */

'use strict'

const DONATION_DATA = [
  {
    name: 'BTC',
    address: 'bc1qhcq8d4c2tkn4txsa9856p80cvjk3dradzjrhyg',
    explorer: 'https://blockstream.info/address/'
  },
  {
    name: 'ETH',
    address: '0x66Aa8Bee5366b6b48811AE0Dac9Fe5e1EEfE1621',
    explorer: 'https://etherscan.io/address/'
  },
  {
    name: 'DAI',
    address: '0x66Aa8Bee5366b6b48811AE0Dac9Fe5e1EEfE1621',
    explorer: 'https://etherscan.io/token/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359?a='
  },
  {
    name: 'WAN',
    address: '0x27ee92dBFC719bc9CD69B5EE6Bc9c66a2e1b5749',
    explorer: 'https://explorer.wanchain.org/address/'
  }
/*
  {
    name: 'ETH',
    address: '0x92a054F55C3B8A47c041D1E378dfd48587eC9e7A',
    explorer: 'https://etherscan.io/address/'
  },
  {
    name: 'BTC',
    address: '1C2gZ5apiqitgXwXVE1RPYgNj3GZHgZNk6',
    explorer: 'https://blockchain.info/address/'
  },
  {
    name: 'BTC (SegWit)',
    address: '39uk9zwu4p2JdwHXduKvVXmfJb96qwv69f',
    explorer: 'https://blockchain.info/address/'
  },
  {
    name: 'LTC',
    address: 'LbkRGm3byn1qBCuJbjRauqLDqQQG4HTcTg',
    explorer: 'https://bchain.info/LTC/addr/'
  },
  {
    name: 'LTC (SegWit)',
    address: 'MSZobxbGbpj5Lz7fQT4r5MKMYYrNLUmbXx',
    explorer: 'https://chainz.cryptoid.info/ltc/address.dws?'
  },
  {
    name: 'BCH',
    address: '18GhYQLWsB2YQCrvQJRojBA29WEbaecG1Z',
    explorer: 'https://blockdozer.com/insight/address/'
  }
  */
]

const createQrCode = (data) => {
  let qrId = 'qrcode-' + data.name
  let donationData = `
    <div class="col s12 l6 center-align">
      <h5>${data.name}</h5>
      <p>${data.address}</p>
      <a href="${data.explorer + data.address}" target="_blank">
        <div class="qrcode" id="${qrId}"></div>
      </a>
    </div>
  `
  $('#donate-direct').append(donationData)
  return new QRCode(document.getElementById(qrId), data.address)
}

$(() => {
  for (let data of DONATION_DATA) {
    createQrCode(data)
  }
})
