import { Container } from "./styles";

export function TransactionsTable() {

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Catergoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            Desenvolvimento de website
                        </td>
                        <td className="deposit">
                            R$12.000,00
                        </td>
                        <td>
                            Desenvolvimento
                        </td>
                        <td>10/10/2010</td>
                    </tr>
                    <tr>
                        <td>
                           Aluguel
                        </td>
                        <td className="withdraw">
                            - R$1.000,00
                        </td>
                        <td>
                           Casa
                        </td>
                        <td>10/10/2010</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}