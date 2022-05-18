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

/*****************************************************
 * EDIT YOUR CODE BELOW
 *****************************************************/
// TODO: design a thing that contains animal name and its height.
(async function () {
  // Initialization of the automerge data
  var currentDoc: Automerge.FreezeObject<any>;
  currentDoc = Automerge.init();
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  // When refreshDisplay is called, data displayed on html page will be updated.
  function refreshDisplay() {
    display1.innerHTML = "TODO: call a function to return the animalName.";
    display2.innerHTML = "TODO: call a function to return the hight of animal.";
  }


  
  function receive(msg: Automerge.BinaryChange[]) : void {
    // TODO: handle the message from other replicas
    // You may find Automerge.applyChanges be helpful
  }
  // When getting a message from other replicas, this line will call receive function
  var wsNetwork = new AutomergeWebSocketNetwork(receive, wsURL, "");
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    // animal_name contains the name of animal and height contains the hight of the animal
    // TODO: apply new values to the animal

    // You may find Automerge.change and Automerge.getChanges will be helpful
    // You can use wsNetwork.send(msg) to send message to other replicas.
    // The msg can be constructed using Automerge.getChanges
    
    return false; // prevent reload
  };
  
})();