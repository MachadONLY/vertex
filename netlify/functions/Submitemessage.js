const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: formData.name,
    email: formData.email,
    message: formData.message
  };

  // URL da função serverless no Netlify
  const netlifyFunctionURL = 'https://vertexagency.netlify.app/.netlify/functions/submitMessage';

  const response = await fetch(netlifyFunctionURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  } else {
    alert('Erro ao enviar mensagem. Tente novamente.');
  }
};
