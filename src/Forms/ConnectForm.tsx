import {useHue} from "../Context/HueBridgeContext.tsx";
import {useForm} from "react-hook-form";
import { connectSchema, type ConnectFormValues } from "./ConnectSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Box,TextField,Button} from "@mui/material"
import {useNavigate} from "@tanstack/react-router";

export const ConnectForm = () => {

    const hueData = useHue();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting} } =
        useForm<ConnectFormValues>({
            resolver: zodResolver(connectSchema),
            defaultValues: {
                ip: hueData?.hueData.internalipaddress == null ? "" : hueData.hueData.internalipaddress,
                accessCode: hueData?.hueData.id == null ? "" : hueData.hueData.id
            }
        });


    const onSubmit = (data: ConnectFormValues) => {
      hueData?.saveConnection(data?.ip, data?.accessCode, "AAAA", 443);
    };


    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: "30rem",
                width: "80vh",
                mx: "auto",
                mt: 4}}>

            <TextField
                label={"IP adresa bridge"}
                placeholder={"192.168.0.1"}
                fullWidth={true}
                {...register("ip")}
                error={!!errors.ip}
                helperText={errors?.ip?.message}
            />

            <TextField
                label={"Access Code"}
                placeholder={"34DJUE45353"}
                fullWidth={true}
                {...register("accessCode")}
                error={!!errors.accessCode}
                helperText={errors?.accessCode?.message}
            />

            <Button type={"submit"} variant={"contained"} disabled={isSubmitting}>
                {isSubmitting ? "Připojuju..." : "Uložit a Připojit"}
            </Button>
            <Box sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                flexDirection: "column"}}>
                <Button>
                    Jak získat můj access code
                </Button>
                <Button>
                    Můj bridge není v nabídce
                </Button>

            </Box>

        </Box>
    )

}