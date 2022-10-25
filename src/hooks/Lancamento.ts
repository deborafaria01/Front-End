import { Lancamento } from "../types/Types"

// pegar um lancamento por id
export async function getLancamento(id: string | undefined) {
    return fetch(`${process.env.REACT_APP_SERVER}/getLancamento/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            return data
    })
}

// atualizar lancamento
export async function atualizarLancamento(lancamento: Lancamento | undefined , id: string | undefined) {
    return fetch(`${process.env.REACT_APP_SERVER}/atualizarLancamento/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lancamento),
      })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
    .catch((err) => console.log(err))
}

// aprovar lancamento
export async function aprovarLancamento(lancamento: Lancamento | undefined , id: string | undefined) {
    return fetch(`${process.env.REACT_APP_SERVER}/aprovarLancamento/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lancamento),
      })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
    .catch((err) => console.log(err))
}

// reprovar lancamento
export async function reprovarLancamento(lancamento: Lancamento | undefined , id: string | undefined) {
    return fetch(`${process.env.REACT_APP_SERVER}/reprovarLancamento/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lancamento),
      })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
    .catch((err) => console.log(err))
}