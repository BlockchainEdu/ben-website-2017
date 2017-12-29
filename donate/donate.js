const DONATION_DATA = [
  {
    name: 'ETH',
    address: '0xfd5e7D9B422b12022d1488710AA7a1d2F40bA0C4',
    explorer: 'https://etherscan.io/address/'
  },
  {
    name: 'BTC',
    address: '1C2gZ5apiqitgXwXVE1RPYgNj3GZHgZNk6',
    explorer: 'https://blockchain.info/address/'
  },
  {
    name: 'LTC',
    address: 'LbkRGm3byn1qBCuJbjRauqLDqQQG4HTcTg',
    explorer: 'https://bchain.info/LTC/addr/'
  },
  {
    name: 'BCH',
    address: '14PNpPRms2dqavG163Eh6zZXTquhgwsx5t',
    explorer: 'https://blockdozer.com/insight/address/'
  }
];

const addDonationData = (data) => {
  let qrId = 'qrcode-' + data.name;
  let donationData = `
    <div class="col s12 l6 center-align">
      <h5>${data.name}</h5>
      <p>${data.address}</p>
      <a href="${data.explorer + data.address}" target="_blank">
        <div class="qrcode" id="${qrId}"></div>
      </a>
    </div>
  `;
  $('#donate-direct').append(donationData);
  new QRCode(document.getElementById(qrId), data.address);
}

$(() => {
  for (let data of DONATION_DATA) {
    addDonationData(data);
  }
});
