## Package native

This package contains the implementation of the Ethereum Virtual Machine (EVM) native contract system. It provides the functionality to execute smart contracts on the Ethereum blockchain.

### Function: (callFrame) MarshalJSON()

This function marshals a callFrame object into a JSON byte array. The callFrame object represents a single call frame in the EVM execution stack. The JSON representation of the callFrame object includes the following fields:

- Type: The opcode of the call frame.
- From: The address of the account that initiated the call.
- Gas: The amount of gas available for the call.
- GasUsed: The amount of gas used by the call.
- To: The address of the contract being called.
- Input: The input data for the call.
- Output: The output data from the call.
- Error: The error message, if any, from the call.
- RevertReason: The revert reason, if any, from the call.
- Calls: An array of callFrame objects representing the sub-calls made by this call.
- Logs: An array of callLog objects representing the logs generated by this call.
- Value: The value, in wei, transferred with the call.
- TypeString: A string representation of the opcode of the call frame.

### Function: (callFrame) UnmarshalJSON()

This function unmarshals a JSON byte array into a callFrame object. The callFrame object represents a single call frame in the EVM execution stack. The JSON representation of the callFrame object includes the following fields:

- Type: The opcode of the call frame.
- From: The address of the account that initiated the call.
- Gas: The amount of gas available for the call.
- GasUsed: The amount of gas used by the call.
- To: The address of the contract being called.
- Input: The input data for the call.
- Output: The output data from the call.
- Error: The error message, if any, from the call.
- RevertReason: The revert reason, if any, from the call.
- Calls: An array of callFrame objects representing the sub-calls made by this call.
- Logs: An array of callLog objects representing the logs generated by this call.
- Value: The value, in wei, transferred with the call.

The function returns an error if the input byte array is not a valid JSON representation of a callFrame object.