//计算接口返回时长
export const recordRequestTime = (promise: Promise<any>, startTime: number, name: any) => {
    return promise.then((response: any) => {
        console.log(`${name} 接口返回时间：`, Date.now() - startTime, '毫秒');
        return response;
    });
}

// 延迟时间
export const sleep = (time = 1000) => new Promise(resolve => setTimeout(resolve, time));