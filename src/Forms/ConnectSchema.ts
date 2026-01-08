import { z  } from 'zod';

export const connectSchema = z.object({
    ip: z.ipv4({error: "Ip adresa musí mít formát IPV4 např.: 192.168.10.0"})
        .nonempty({error : "Ip adresa je povinná, pokud se nezvolila sama zadejte ji manuálně"})
    ,

    accessCode: z.string()
        .nonempty({error : "Access neboli username nebyl ještě vygenerován, pro návod klikněte níže"})
        .min(10,"Access code se zdá být krátký, musí mít 10 znaků"),
});

export type ConnectFormValues = z.infer<typeof connectSchema>;