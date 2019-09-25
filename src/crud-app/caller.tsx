// for https request
import Axios from 'axios';

type ConfigType = {
  endPoint: string,
  type: string,
  params?:Array<String | Number>,
  data?: Object | any,
}
type Caller = <T>(config:ConfigType, domain: string) => Promise<T>;


function makeUrl(url: string, params: Array<any>) {
  let auxUrl = url;
  params.forEach((param) => {
    auxUrl = auxUrl.replace('$$', param);
  });
  return auxUrl;
}

// config type can take dinamic key : values pair

function makeUrlConfig(url:string, config:any) {
  const { endPoint } = config;
  const dotAuxes:Array<number> = [];
  const dashAuxes:Array<number> = [];
  const namedVars:Array<string> = [];
  let auxString = endPoint;
  for (let i = 0; i <= endPoint.length; i += 1) {
    if (endPoint[i] === ':') {
      dotAuxes.push(i);
    }
    if (endPoint[i] === '$') {
      dashAuxes.push(i);
    }
  }
  dashAuxes.forEach((dash, i) => {
    namedVars.push(endPoint.substring(dash, dotAuxes[i] + 1));
  });
  namedVars.forEach((nameVar) => {
    auxString = auxString.replace(`:${nameVar}$`, config[nameVar]);
  });
  return `${url}${auxString}`;
}

function makeCall(domain:string, type:string, data:Object) {
  const axiosHelper: any = Axios;
  try {
    const response = axiosHelper[type](domain, data);
    return response;
  } catch (error) {
    return error;
  }
}

export function Caller(config:ConfigType, domain:string) {
  const {
    endPoint, type, params, data,
  } = config;
  let url = `${domain}`;
  if (endPoint.includes(':')) {
    url = makeUrlConfig(url, config);
  } else if (params) {
    url = `${url}${endPoint}`;
    url = makeUrl(url, params);
  } else {
    url = `${url}${endPoint}`;
  }

  const response = makeCall(url, type, data);
  return response;
}
