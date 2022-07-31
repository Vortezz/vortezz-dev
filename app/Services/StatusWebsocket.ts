import { Server } from 'socket.io'
import AdonisServer from '@ioc:Adonis/Core/Server'
import Status from "../../struct/Status";

class Ws {
  public io: Server
  private booted = false
  private status: Status;

  public boot() {
    if (this.booted) {
      return
    }

    this.booted = true
    this.io = new Server(AdonisServer.instance!)

    this.io.on("connection", (socket) => {
      socket.emit("status", this.status)
    })

    this.status = new Status()
    this.status.resolveStatus();

    setInterval(async () => {
      await this.status.resolveStatus();

      this.io.emit("status", this.status)
    }, 60000)
  }
}


export default new Ws()
