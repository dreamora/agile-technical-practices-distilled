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
    expression = processParenthesis(expression);
    return expression
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
            }

            throw new Error(`Unknown token ${cur}`);
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
    throw new Error(`Unknown operation ${op}`);
};
function processParenthesis(expression: string): string {
    Array.from(expression.matchAll(/\(.*\)/g)).forEach(match => {
        const matchString = match[0];
        const matchIndex = expression.indexOf(matchString);
        const matchLength = matchString.length;
        const subExpression = expression.substring(matchIndex + 1, matchIndex + matchLength - 1);
        expression =
            expression.slice(0, matchIndex) + (parseExpression(subExpression) ? "TRUE" : "FALSE") + expression.slice(matchIndex + matchLength);
    });

    return expression;
}
