import React, { useRef, useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Snackbar, Alert, Container } from '@mui/material';
import emailjs from 'emailjs-com';
import Layout from '../../components/Layout';

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState<{open: boolean, message: string, severity: 'success' | 'error' | 'warning'}>({open:false,message:'',severity:'success'});

  const handleClose = () => setSnack(prev => ({...prev, open:false}));

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const nome = nameRef.current?.value || '';
    const telefone = telRef.current?.value.replace(/\D/g, '') || '';
    const mensagem = msgRef.current?.value || '';

    if(!nome || !telefone || !mensagem){
      setSnack({open:true,message:'Preencha todos os campos!',severity:'warning'});
      setLoading(false);
      return;
    }

    if(telefone.length !== 11){
      setSnack({open:true,message:'Telefone inválido!',severity:'warning'});
      setLoading(false);
      return;
    }

    if(!form.current){
      setSnack({open:true,message:'Erro no envio do formulário!',severity:'error'});
      setLoading(false);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE,
      'template_1sogban',
      form.current,
      import.meta.env.VITE_EMAILJS_ID
    ).then(() => {
      setSnack({open:true,message:'Mensagem enviada com sucesso!',severity:'success'});
      form.current?.reset();
    }).catch(() => {
      setSnack({open:true,message:'Erro ao enviar mensagem!',severity:'error'});
    }).finally(() => setLoading(false));
  };

  return (
    <Layout>
        <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom>Contato</Typography>

        <Box component="form" ref={form} onSubmit={sendEmail} sx={{ display:'flex', flexDirection:'column', gap:3 }}>
            <TextField label="Nome" name="name" inputRef={nameRef} required fullWidth />
            <TextField label="Telefone (com DDD)" name="telephone" inputRef={telRef} required fullWidth />
            <TextField label="Mensagem" name="message" inputRef={msgRef} required multiline rows={4} fullWidth />

            <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit"/> : 'Enviar Mensagem'}
            </Button>
        </Box>

        <Snackbar open={snack.open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'right'}}>
            <Alert onClose={handleClose} severity={snack.severity} sx={{ width: '100%' }}>
            {snack.message}
            </Alert>
        </Snackbar>
        </Container>
    </Layout>
  );
};

export default ContactPage;
