
export function FormatarHorarioVaga ({dataHoraInicio, dataHoraFim}) {
  if (!dataHoraFim) return `a partir das ${dataHoraInicio}h`;

  return `das ${dataHoraInicio}h até as ${dataHoraFim}h`;
}