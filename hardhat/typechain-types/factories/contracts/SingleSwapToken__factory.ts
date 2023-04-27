/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SingleSwapToken,
  SingleSwapTokenInterface,
} from "../../contracts/SingleSwapToken";

const _abi = [
  {
    inputs: [],
    name: "DAI",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDC",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH9",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "swapExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMaximum",
        type: "uint256",
      },
    ],
    name: "swapExactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611048806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80634aa4a4fc1461006757806373bd43ad1461008557806389a30271146100b5578063c31c9c07146100d3578063c4b69a18146100f1578063e0bab4c414610121575b600080fd5b61006f61013f565b60405161007c919061099d565b60405180910390f35b61009f600480360381019061009a91906109f3565b610157565b6040516100ac9190610a2f565b60405180910390f35b6100bd61030b565b6040516100ca919061099d565b60405180910390f35b6100db610323565b6040516100e89190610aa9565b60405180910390f35b61010b60048036038101906101069190610ac4565b61033b565b6040516101189190610a2f565b60405180910390f35b610129610542565b604051610136919061099d565b60405180910390f35b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b600061017973c02aaa39b223fe8d0a0e5c4f27ead9083c756cc233308561055a565b6101ac73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273e592427a0aece92de3edee1f18e0157c05861564846106b2565b600060405180610100016040528073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff168152602001736b175474e89094c44da98b954eedeac495271d0f73ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200184815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905073e592427a0aece92de3edee1f18e0157c0586156473ffffffffffffffffffffffffffffffffffffffff1663414bf389826040518263ffffffff1660e01b81526004016102c09190610bf1565b6020604051808303816000875af11580156102df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103039190610c22565b915050919050565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b73e592427a0aece92de3edee1f18e0157c0586156481565b600061035d73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc233308561055a565b61037c73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc230846106b2565b600060405180610100016040528073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff168152602001736b175474e89094c44da98b954eedeac495271d0f73ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001428152602001838152602001848152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905073e592427a0aece92de3edee1f18e0157c0586156473ffffffffffffffffffffffffffffffffffffffff1663db3e2198826040518263ffffffff1660e01b815260040161048f9190610cf1565b6020604051808303816000875af11580156104ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d29190610c22565b91508282101561053b5761051073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273e592427a0aece92de3edee1f18e0157c0586156460006106b2565b61053a73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc23384866105359190610d3c565b610807565b5b5092915050565b736b175474e89094c44da98b954eedeac495271d0f81565b6000808573ffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b86868660405160240161059193929190610d70565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516105fb9190610e18565b6000604051808303816000865af19150503d8060008114610638576040519150601f19603f3d011682016040523d82523d6000602084013e61063d565b606091505b509150915081801561066b575060008151148061066a5750808060200190518101906106699190610e67565b5b5b6106aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a190610ef1565b60405180910390fd5b505050505050565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b85856040516024016106e7929190610f11565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516107519190610e18565b6000604051808303816000865af19150503d806000811461078e576040519150601f19603f3d011682016040523d82523d6000602084013e610793565b606091505b50915091508180156107c157506000815114806107c05750808060200190518101906107bf9190610e67565b5b5b610800576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f790610f86565b60405180910390fd5b5050505050565b6000808473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b858560405160240161083c929190610f11565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516108a69190610e18565b6000604051808303816000865af19150503d80600081146108e3576040519150601f19603f3d011682016040523d82523d6000602084013e6108e8565b606091505b509150915081801561091657506000815114806109155750808060200190518101906109149190610e67565b5b5b610955576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094c90610ff2565b60405180910390fd5b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109878261095c565b9050919050565b6109978161097c565b82525050565b60006020820190506109b2600083018461098e565b92915050565b600080fd5b6000819050919050565b6109d0816109bd565b81146109db57600080fd5b50565b6000813590506109ed816109c7565b92915050565b600060208284031215610a0957610a086109b8565b5b6000610a17848285016109de565b91505092915050565b610a29816109bd565b82525050565b6000602082019050610a446000830184610a20565b92915050565b6000819050919050565b6000610a6f610a6a610a658461095c565b610a4a565b61095c565b9050919050565b6000610a8182610a54565b9050919050565b6000610a9382610a76565b9050919050565b610aa381610a88565b82525050565b6000602082019050610abe6000830184610a9a565b92915050565b60008060408385031215610adb57610ada6109b8565b5b6000610ae9858286016109de565b9250506020610afa858286016109de565b9150509250929050565b610b0d8161097c565b82525050565b600062ffffff82169050919050565b610b2b81610b13565b82525050565b610b3a816109bd565b82525050565b610b498161095c565b82525050565b61010082016000820151610b666000850182610b04565b506020820151610b796020850182610b04565b506040820151610b8c6040850182610b22565b506060820151610b9f6060850182610b04565b506080820151610bb26080850182610b31565b5060a0820151610bc560a0850182610b31565b5060c0820151610bd860c0850182610b31565b5060e0820151610beb60e0850182610b40565b50505050565b600061010082019050610c076000830184610b4f565b92915050565b600081519050610c1c816109c7565b92915050565b600060208284031215610c3857610c376109b8565b5b6000610c4684828501610c0d565b91505092915050565b61010082016000820151610c666000850182610b04565b506020820151610c796020850182610b04565b506040820151610c8c6040850182610b22565b506060820151610c9f6060850182610b04565b506080820151610cb26080850182610b31565b5060a0820151610cc560a0850182610b31565b5060c0820151610cd860c0850182610b31565b5060e0820151610ceb60e0850182610b40565b50505050565b600061010082019050610d076000830184610c4f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d47826109bd565b9150610d52836109bd565b9250828203905081811115610d6a57610d69610d0d565b5b92915050565b6000606082019050610d85600083018661098e565b610d92602083018561098e565b610d9f6040830184610a20565b949350505050565b600081519050919050565b600081905092915050565b60005b83811015610ddb578082015181840152602081019050610dc0565b60008484015250505050565b6000610df282610da7565b610dfc8185610db2565b9350610e0c818560208601610dbd565b80840191505092915050565b6000610e248284610de7565b915081905092915050565b60008115159050919050565b610e4481610e2f565b8114610e4f57600080fd5b50565b600081519050610e6181610e3b565b92915050565b600060208284031215610e7d57610e7c6109b8565b5b6000610e8b84828501610e52565b91505092915050565b600082825260208201905092915050565b7f5354460000000000000000000000000000000000000000000000000000000000600082015250565b6000610edb600383610e94565b9150610ee682610ea5565b602082019050919050565b60006020820190508181036000830152610f0a81610ece565b9050919050565b6000604082019050610f26600083018561098e565b610f336020830184610a20565b9392505050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b6000610f70600283610e94565b9150610f7b82610f3a565b602082019050919050565b60006020820190508181036000830152610f9f81610f63565b9050919050565b7f5354000000000000000000000000000000000000000000000000000000000000600082015250565b6000610fdc600283610e94565b9150610fe782610fa6565b602082019050919050565b6000602082019050818103600083015261100b81610fcf565b905091905056fea264697066735822122032ba76df2d7e10112be1399229f444e0621867fbeb7f0394b1ea27bcf858a52a64736f6c63430008110033";

type SingleSwapTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SingleSwapTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SingleSwapToken__factory extends ContractFactory {
  constructor(...args: SingleSwapTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SingleSwapToken> {
    return super.deploy(overrides || {}) as Promise<SingleSwapToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SingleSwapToken {
    return super.attach(address) as SingleSwapToken;
  }
  override connect(signer: Signer): SingleSwapToken__factory {
    return super.connect(signer) as SingleSwapToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SingleSwapTokenInterface {
    return new utils.Interface(_abi) as SingleSwapTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SingleSwapToken {
    return new Contract(address, _abi, signerOrProvider) as SingleSwapToken;
  }
}
