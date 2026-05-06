const WS_BASE_URL = import.meta.env.VITE_API_WS_BASE_URL ?? 'ws://localhost:3000'

export async function createWSSClient(onMessage: (data: any) => void){
    console.log('Creating WSS client...');
    const ws = new WebSocket(WS_BASE_URL);
    console.log('WSS connecting...');

    ws.addEventListener('error', console.error);

    ws.onopen = () => {
        console.log('connected');
    };

    ws.onclose = () => {
        console.log('disconnected');
    };

    ws.onmessage = function message(event) {
        const payload = event.data;
        const data = JSON.parse(payload)
        onMessage(data);
    };
}