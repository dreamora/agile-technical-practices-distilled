type Token = string | boolean;
type ExpressionToken = "TRUE" | "FALSE" | "NOT" | "AND" | "OR" | "(" | ")";

export const calculateBoolean = (expression: string): boolean => {
    return isLiteral(expression) ? parseLiteral(expression) : parseExpression(expression);
};

const isLiteral = (expression: string): expression is "TRUE" | "FALSE" => {
    return expression === "TRUE" || expression === "FALSE";
};

const parseLiteral = (literal: string | boolean): boolean => {
    if (typeof literal === "boolean") {
        return literal;
    }
    return literal === "TRUE";
};

const parseExpression = (expression: string): boolean => {
    const tokens: Token[] = expression.split(" ");

    let currentOp = "";
    return parseLiteral(
        tokens.reduce((prev: Token, cur: Token) => {
            if (typeof cur !== "string") {
                return prev;
            }

            if (prev === "NOT") {
                currentOp = "NOT";
            }

            const curToken: ExpressionToken = cur as ExpressionToken;
            switch (curToken) {
                case "TRUE":
                    if (currentOp !== "") {
                        const res = applyOp(currentOp, true, prev);
                        currentOp = "";
                        return res;
                    }
                    break;
                case "FALSE":
                    if (currentOp !== "") {
                        const res = applyOp(currentOp, false, prev);
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
                case "OR":
                    currentOp = "OR";
                    return prev;
                case ")":
                    currentOp = "";
                    return prev;
                case "(":
                    currentOp = "";
                    return prev;
            }

            return false;
        })
    );
};

const applyOp = (op: string, literal: boolean, previousLiteral: string | boolean): boolean => {
    if (op === "AND") {
        return literal && parseLiteral(previousLiteral);
    } else if (op === "OR") {
        return literal || parseLiteral(previousLiteral);
    } else if (op === "NOT") {
        return !literal;
    }
    return false;
};
