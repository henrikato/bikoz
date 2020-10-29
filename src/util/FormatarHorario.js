export function FormatarHorarioVaga ({dataHoraInicio, dataHoraFim}) {
  let dataInicio = dataHoraInicio.format("DD/MM");
  let horaInicio = dataHoraInicio.format("HH:mm")
  if (!dataHoraFim) return `${dataInicio} a partir das ${horaInicio}h`;

  let dataFim = dataHoraFim.format("DD/MM");
  let horaFim = dataHoraFim.format("HH:mm");
  if(horaFim === "00:00") return `${dataInicio} das ${horaInicio}h às ${horaFim}h`;

  return `${dataInicio} às ${horaInicio}h até ${dataFim} às ${horaFim}h`;
}