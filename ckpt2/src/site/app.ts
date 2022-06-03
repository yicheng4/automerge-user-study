// import { SyncFramework } from "../sync_framework";
import Automerge from "automerge";
import ReconnectingWebSocket from "reconnecting-websocket";
import { Buffer } from "buffer";
import e from "express";

const WS_PORT = 8081;
const wsProtocol = location.protocol.replace(/^http/, "ws");
const wsURL = wsProtocol + "//" + location.hostname + ":" + WS_PORT;
/*****************************************************
 * DO NOT CHANGE THINGS BELOW UNTIL LINE 84
 *****************************************************/

/**
 * Copied from @collabs/ws-client, but slightly modified
 * to work with Automerge instead.
 */
 class AutomergeWebSocketNetwork {
  /**
   * Connection to the server.
   *
   * Use ReconnectingWebSocket so we don't have to worry about
   * reopening closed connections.
   */
  readonly ws: ReconnectingWebSocket;

  /**
   * [constructor description]
   * @param url The url to pass to WebSocket's constructor.
   * @param group A group name that uniquely identifies this
   * app and group of collaborators on the server.
   * (The server broadcasts messages between WebSocketNetworks
   * in the same group.)
   */
  constructor(
    private readonly onreceive: (msg: Automerge.BinaryChange[]) => void,
    url: string,
    readonly group: string
  ) {
    this.ws = new ReconnectingWebSocket(url);
    this.ws.addEventListener("message", this.wsReceive.bind(this));

    // Register with the server.
    const register = JSON.stringify({
      type: "register",
      group: group,
    });
    this.ws.send(register);
  }

  /**
   * this.ws "message" event handler.
   */
  private wsReceive(e: MessageEvent) {
    // Opt: use Uint8Array directly instead
    // (requires changing options + server)
    // See https://stackoverflow.com/questions/15040126/receiving-websocket-arraybuffer-data-in-the-browser-receiving-string-instead
    let parsed = JSON.parse(e.data) as { group: string; message: string[] };
   
    if (parsed.group === this.group) {
      // It's for us
      this.onreceive(
        parsed.message.map(
          (one) =>
            new Uint8Array(Buffer.from(one, "base64")) as Automerge.BinaryChange
        )
      );
    }
  }

  /**
   * this.app "Send" event handler.
   */
  send(msg: Automerge.BinaryChange[]): void {
    let encoded = msg.map((one) => Buffer.from(one).toString("base64"));
    let toSend = JSON.stringify({ group: this.group, message: encoded });
    // (requires changing options + server)
    // See https://stackoverflow.com/questions/15040126/receiving-websocket-arraybuffer-data-in-the-browser-receiving-string-instead
    this.ws.send(toSend);
  }
}
enum DogObedience {
  UNKNOWN = 0,
  BAD = 1,
  OKAY = 2,
  GOOD = 3,
}
/*****************************************************
 * EDIT YOUR CODE BELOW
 *****************************************************/


(async function () {
  // Initialization of the automerge data
  var currentDoc: Automerge.FreezeObject<any>;
  currentDoc = Automerge.init();
  
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  const display3 = document.getElementById("display3")!;

  
  function refreshDisplay() {
    // Refresh the display, possibly due to a message from another replica.
    // You may want to call the function explictly in your code.
    display1.innerHTML = "TODO: return the animal type(Cat or Dog) and status of its special feature (by whatever form you like).";
    display2.innerHTML = "TODO: return the animalName.";
    display3.innerHTML = "TODO: return the hight of animal.";
  }

  
  
  function receive(msg: Automerge.BinaryChange[]) : void {
    // TODO: handle the message from other replicas
    // You may find Automerge.applyChanges be helpful
    // You may find the previous checkpoint be useful
    // When observe states updates, call refreshDisplay
  }
  
  // When getting a message from other replicas, this line will call receive.
  var wsNetwork = new AutomergeWebSocketNetwork(receive, wsURL, "");
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    var animal_kind : number;
    for (const radioButton of radioButtons) {
      const buttons = <HTMLFormElement>radioButton;
      if (buttons.checked) {
        animal_kind = +buttons.value;
        break;
      }
    }
    const obedience = formData.get('dog_obedience') as string; // read the dog obedience value
    const purrs = formData.get('cat_purrs') as string; // read the purrs value
    // animal_name contains the name of animal and height contains the hight of the animal
    // animal_kind is 1 if it is a Dog, is 2 if it is a Cat.
    // TODO: apply new values to the animal shown on the screen and 
    // also change to the corresponding animal type
    // Hint: You may find Automerge.change and Automerge.getChanges will be helpful
    // You can use wsNetwork.send(msg) to send message to other replicas.
    // The msg can be constructed using Automerge.getChanges

    return false; // prevent reload
  };
  



  

  

  
})();