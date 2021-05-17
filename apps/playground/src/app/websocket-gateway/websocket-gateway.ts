import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { Server } from 'ws';


@WebSocketGateway(3301, {
  path: '/ws/gateway'
})
export class WebsocketGateway {
  @WebSocketServer()
  server: Server;

  constructor() {
    let i = 0;
    setInterval(() => {
      this.httpLogging$.next({
        log: ++i
      });
    }, 1000);
  }

  protected httpLogging$ = new Subject();

  @SubscribeMessage('query:logging')
  onEvent(client: any, data: any): Observable<WsResponse<any>> {
    return of(data).pipe(
      // takeUntil(),
      switchMap(() => {
        return this.httpLogging$;
      }),
      map((data) => {
        return { event: 'response:logging', data, isDisposed: false };
      }),
      finalize(() => {
        return { isDisposed: true };
      })
    );
  }

}
