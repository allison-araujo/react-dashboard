
import React, { useMemo, useState, useEffect} from 'react';
import {Container, Content, Filters} from './styles';
//componentes
import ContentHeader from '../../components/contentHeader';
import SelectEntrada from '../../components/SelecEntrada';
import MovimentoFinanceiro from '../../components/movimentoFinanceiro';

//arquivos uteis
import formatarValores from '../../utils/formatarValores';
import formatarData from '../../utils/formatarData';
import ListaMeses from '../../utils/meses';
import {uuid} from 'uuidv4';
import ganho from '../../arquivosEntradaTeste/ganho';
import gastosTeste from '../../arquivosEntradaTeste/gastosTeste';



interface IRouteParams{
    match:{
        params: {
            type: string;
        }
    }
}

interface IData{
    id: string;
    descricao: string;
    valor: string;
    frequencia: string;
    dataFormat: string;
    tagColor: string;
}

const Show: React.FC<IRouteParams> = ({match}) => {
/**filtros de informacoes */
    const [data,setData] = useState<IData[]>([]);
    const [mesSelect, setSelectMes] = useState<number>(new Date().getMonth() + 1);
    const [anosSelect, setSelectAno] = useState<number>(new Date().getFullYear());
    const [selectFrequencia, setSelecaoFreq] = useState(['recorrente','eventual']);


    const { type } = match.params;

    const verify = useMemo(() => {
        return  type === 'entrada' ?
            {
                title: 'Entradas',
                lineColor: '#228B22',
                daata: ganho

            }:{
                title: 'Saídas',
                lineColor: '#E44C4E',
                daata: gastosTeste        
        }
    },[type]);

     
    const pAnos = useMemo(() => {
        let receivedAnos: number[] = [];

        verify.daata.forEach(item => {
            const date = new Date(item.date);
            const vAnos = date.getFullYear();


            if(!receivedAnos.includes(vAnos)){
                receivedAnos.push(vAnos);

            }

        });

        return receivedAnos.map(vAnos => {
            return {
                value:vAnos,
                label:vAnos,
            }
        });
    },[verify.daata]);
    

    const pMeses = useMemo(() => {
        
        return ListaMeses.map((meses,index) => {
            return {
                value: index +1,
                label: meses,
            }
        });
        
    },[]);


    const botaoFrequenciaClick = (freq: string) => {
        const alreadySelected = selectFrequencia.findIndex(item => item === freq);

        if(alreadySelected >= 0){
            const filtro = selectFrequencia.filter(p => p !== freq);
            setSelecaoFreq(filtro);
        }else{
            setSelecaoFreq((prev) => [...prev, freq]);//selecao dp estado anterior, filtros anteriores
            }
    }   

    const handMesSelecionado = (mes: string) => {
        //funcao recebe o mes em string e convete p/numero;
        try{
            const parseMes = Number(mes);
            setSelectMes(parseMes);
        }
        catch(error){
            throw new  Error('valor invalido de mes');
        }
    }

    const handAnoSelecionado = (mes: string) => {
        //funcao recebe o ano em string e convete p/numero;
        try{
            const parseAno = Number(mes);
            setSelectAno(parseAno);
        }
        catch(error){
            throw new  Error('valor invalido de Ano');
        }
    }

    useEffect(() => {
       const dataFiltrada =  verify.daata.filter(item => {
        const date = new Date(item.date);
        const mes = date.getMonth() + 1;
        const ano = date.getFullYear();

        return mes === mesSelect &&  ano === anosSelect && selectFrequencia.includes(item.frequencia);
       });
        
       const dataFormatada = dataFiltrada.map(item => {              
            return {
                id: uuid(),
                descricao: item.descricao,
                valor: formatarValores(Number(item.valor)),
                frequencia: item.frequencia,
                dataFormat: formatarData(item.date),
                tagColor: item.frequencia === 'recorrente' ? '#228B22' : '#E44C4E',
        
            } 
        });
        setData(dataFormatada);
    },[verify.daata,mesSelect,anosSelect, data.length, selectFrequencia]);

    return (
        <Container>
             <ContentHeader title={verify.title} lineColor={verify.lineColor}>
                <SelectEntrada options={pMeses}  onChange={(e) => handMesSelecionado(e.target.value)} defaultValue={mesSelect}/>
                <SelectEntrada options={pAnos} onChange={(e) => handAnoSelecionado(e.target.value)} defaultValue={anosSelect}/>
            </ContentHeader>

            <Filters>
                <button type="button" className= {`tag-filter tag-filter-recurrent ${selectFrequencia.includes('recorrente') && 'tag-actived'}`}  
                onClick={() => botaoFrequenciaClick('recorrente')}>
                    Previstos
                </button>

                <button type="button" className={`tag-filter tag-filter-eventual ${selectFrequencia.includes('eventual') && 'tag-actived'}`}  
                 onClick={() => botaoFrequenciaClick('eventual')}>
                    Não Previstos
                </button>

            </Filters>

            <Content>
                {
                    data.map(acess => (
                        <MovimentoFinanceiro  
                            key={acess.id}
                            bordaCartao={acess.tagColor} /**cor da borda dos itens */
                            title={acess.descricao}
                            subTitle={acess.dataFormat}
                            valor={acess.valor}                
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default Show;