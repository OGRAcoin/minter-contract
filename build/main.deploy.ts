import * as main from "../contracts/main";
import { Address } from "ton";

// return the init Cell of the contract storage (according to load_data() contract method)
export function initData() {
  return main.data({
    ownerAddress: Address.parseFriendly("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N").address,
    counter: 0,
  });
}

// return the op that should be sent to the contract on deployment, can be "null" so send an empty message
export function initMessage() {
  return main.increment();
}
