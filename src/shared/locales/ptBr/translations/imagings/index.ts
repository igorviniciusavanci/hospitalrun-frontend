export default {
  imagings: {
    label: 'Imagens',
    status: {
      requested: 'Pedido',
      completed: 'Completo',
      canceled: 'Cancelado',
    },
    requests: {
      label: 'Pedido de Imagem',
      new: 'Novo Pedido de Imagem',
      view: 'Visualizar Imagem',
      create: 'Criar Imagem',
      cancel: 'cancelar Imagem',
      complete: 'Imagem Completa',
      error: {
        unableToRequest: 'Não foi possível criar uma nova imagem.',
        incorrectStatus: 'Status incorreto',
        typeRequired: 'O Tipo é obrigatório.',
        statusRequired: 'O Status é obrigatório.',
        patientRequired: 'O nome do paciente é obrigatório.',
      },
    },
    imaging: {
      label: 'imaging',
      code: 'Imaging Code',
      status: 'Status',
      type: 'Type',
      notes: 'Notes',
      requestedOn: 'Solicitado em',
      completedOn: 'Completo em',
      canceledOn: 'Cancelado em',
      requestedBy: 'Requerido por',
      patient: 'Paciente',
    },
  },
}
