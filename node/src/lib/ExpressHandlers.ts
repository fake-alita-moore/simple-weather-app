import { Request, Response } from "express";

export type Handler<MethodArgsT = {}, RouteArgsT = {}> = {
  routeParams: RouteArgsT;
  methodArgs: MethodArgsT;
  props: MethodArgsT & RouteArgsT;
};

type ExtractReturn<M> = M extends (a: any) => (b: any) => infer R ? R : M;
type ExpressHandler<HP extends Handler, H> = (
  req: Request,
  res: Response
) => Promise<ExtractReturn<H>>;

export const buildHandler = <HP extends Handler>(
  handler: (props: HP["props"]) => Promise<any> | any
): ExpressHandler<HP, typeof handler> => {
  return async (req: Request, res: Response) => {
    res.send(await handler({ ...req.params, ...req.body }));
  };
};
