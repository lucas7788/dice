import {
  client
} from 'ontology-dapi'
import { Crypto, utils } from 'ontology-ts-sdk'
import {
  BigNumber
} from 'bignumber.js'
import numeral from 'numeral'

export const params = [{
    type: 'ByteArray',
    value: ''
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  },
  {
    type: 'Integer',
    value: 0
  }
]

export async function ScCall(method, paramsFormat = function() {}, way = 'invoke') {
  const address = await client.api.asset.getAccount()
  const scriptHash = new Crypto.Address(address).serialize()
  const contract = 'f99cd782db6343152a3113dab2edba9892edd527'
  const gasPrice = '500'
  const gasLimit = '100000000'
  const requireIdentity = false
  let parameters = []
  parameters[0] = {
    type: 'ByteArray',
    value: scriptHash
  }
  // handle parameters
  parameters = await paramsFormat(parameters, address)

  // eslint-disable-next-line
  console.log(`ScCall ${method} => ${JSON.stringify(parameters)}`);

  return await client.api.smartContract[way]({
    contract,
    method,
    parameters,
    gasPrice,
    gasLimit,
    requireIdentity
  })
}


const decimal = 1e9;
export function formatNumer(num) {
  return numeral(num).format('0,0.000')
}

export const parseNumber = (val, hasDecimal) => {
  if (!val) return 0;
  const value = new BigNumber(utils.reverseHex(val), 16);
  if (hasDecimal) {
    return value.dividedBy(decimal).toNumber();
  } else {
    return value.toNumber();
  }
}
