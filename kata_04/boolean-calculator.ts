type Token = string | boolean;
type ExpressionToken = "TRUE" | "FALSE" | "NOT" | "AND" | "OR" | "(" | ")";

export const calculateBoolean = (expression: string): boolean => {
    return isLiteral(expression) ? parseLiteral(expression) : parseExpression(expression);
};

const isLiteral = (expression: string): expression is "TRUE" | "FALSE" => {
    return expression === "TRUE" || expression === "FALSE";
};

const parseLiteral = (literal: string | boolean): boolean => {
    return typeof literal === "boolean" ? literal : literal === "TRUE";
};

const parseExpression = (expression: string): boolean => {
    return calculateParenthesis(expression)
        .split(" OR ")
        .map(cur => parseSubExpression(cur))
        .reduce((prev, cur) => {
            return prev || cur;
        });
};

const parseSubExpression = (expression: string): boolean => {
    const tokens: Token[] = expression.split(" ");
    let currentOp = "";
    return parseLiteral(
        tokens.reduce((prev: Token, cur: Token) => {
            if (prev === "NOT") {
                currentOp = "NOT";
            }

            const curToken: ExpressionToken = cur as ExpressionToken;
            switch (curToken) {
                case "TRUE":
                    if (currentOp !== "") {
                        const res = applyOperation(currentOp, true, prev);
                        currentOp = "";
                        return res;
                    }
                    break;
                case "FALSE":
                    if (currentOp !== "") {
                        const res = applyOperation(currentOp, false, prev);
                        currentOp = "";
                        return res;
                    }
                    break;
                case "NOT":
                    currentOp = "NOT";
                    return prev;
                case "AND":
                    currentOp = "AND";
                    return prev;
            }

            throw new Error(`Unknown token ${cur}`);
        })
    );
};

const applyOperation = (op: string, literal: boolean, previousLiteral: string | boolean): boolean => {
    if (op === "AND") {
        return literal && parseLiteral(previousLiteral);
    } else if (op === "OR") {
        return literal || parseLiteral(previousLiteral);
    } else if (op === "NOT") {
        return !literal;
    }
    throw new Error(`Unknown operation ${op}`);
};

function calculateParenthesis(expression: string): string {
    return expression.replaceAll(/\(([^()]*)\)/g, match => (parseExpression(match.substring(1, match.length - 1)) ? "TRUE" : "FALSE"));
}
