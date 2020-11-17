
type ObjDataType = {
    [key: string]: () => number
}

export type ObjType = {
    (x: Array<any>): ObjDataType
}

export const DataObj: ObjType = (x: Array<string>) => {
    return {
        A() {
            return reCalcValue(+x[2])
        },
        B() {
            return reCalcValue(+x[1])
        },
        C() {
            return reCalcValue(+x[0])
        },
        D() {
            return reCalcValue(this.A() + this.B() + this.C())
        },
        E() {
            return reCalcValue(this.A() + this.B() + this.C() + this.D())
        },
        F() {
            return reCalcValue(this.E() + this.D())
        },
        G() {
            return reCalcValue(this.F() + this.D())
        },
        H() {
            return reCalcValue(this.A() + this.B())
        },
        I() {
            return reCalcValue(this.B() + this.C())
        },
        J() {
            return reCalcValue(this.C() + this.D())
        },
        K() {
            return reCalcValue(this.A() + this.D())
        },
        L() {
            return reCalcValue(this.A() + this.E())
        },
        M() {
            return reCalcValue(this.B() + this.E())
        },
        N() {
            return reCalcValue(this.L() + this.E())
        },
        O() {
            return reCalcValue(this.M() + this.E())
        },
        P() {
            return reCalcValue(this.A() + this.L())
        },
        Q() {
            return reCalcValue(this.B() + this.M())
        },
        R() {
            return reCalcValue(this.C() + this.E())
        },
        S() {
            return reCalcValue(this.R() + this.F())
        },
        T() {
            return reCalcValue(this.R() + this.S())
        },
        U() {
            return reCalcValue(this.S() + this.F())
        },
    }
}

const reCalcValue = (x: number): number => {
    if (x > 22) {
        let newValue = x.toString().split('')
        let sum = 0
        for (let i = 0; i < newValue.length; i++) {
            sum = +newValue[i] + sum
        }
        x = sum
        return x
    } else {
        return x
    }
}

export const DataObj2: ObjType = (x) => {

    const Data = DataObj(x)

    return {
        V() {
            return reCalcValue(Data.B() + Data.D())
        },
        W() {
            return reCalcValue(Data.A() + Data.C())
        },
        X() {
            return reCalcValue(this.W() + this.V())
        },
        Y() {
            return reCalcValue(Data.H() + Data.J())
        },
        Z() {
            return reCalcValue(Data.I() + Data.K())
        },
        AA() {
            return reCalcValue(this.Y() + this.Z())
        },
        BB() {
            return reCalcValue(this.X() + this.AA())
        },
        LL() {
            return reCalcValue(Data.L() + Data.M())
        },
        OO() {
            return reCalcValue(Data.L() + Data.M() + this.LL())
        },
        MM() {
            return reCalcValue(Data.N() + Data.O())
        },
        PP() {
            return reCalcValue(Data.N() + Data.O() + this.MM())
        },
        NN() {
            return reCalcValue(Data.P() + Data.Q())
        },
        QQ() {
            return reCalcValue(Data.P() + Data.Q() + this.NN())
        },
        SS() {
            return reCalcValue(Data.E() + Data.E())
        },
        WW() {
            return reCalcValue(Data.E() + Data.E() + this.SS())
        },
        TT() {
            return reCalcValue(Data.A() + Data.B())
        },
        XX() {
            return reCalcValue(Data.A() + Data.B() + this.TT())
        },
        VV() {
            return reCalcValue(Data.C() + Data.D())
        },
        ZZ() {
            return reCalcValue(Data.C() + Data.D() + this.VV())
        },
        RR() {
            return reCalcValue(Data.F() + Data.S() + Data.R())
        },
        ff() {
            return reCalcValue(Data.A() + Data.B() + Data.C() + Data.D() + Data.F())
        },
        EE() {
            return reCalcValue(this.ff() + Data.E())
        },
        HH() {
            return reCalcValue(this.ff() + this.EE())
        },
        CC() {
            return reCalcValue(Data.B() + Data.C() + Data.D() + Data.F())
        },
        KK() {
            return reCalcValue(this.EE() + this.ff() + this.CC() + Data.A())
        },
    }
}

export const TalentsVar:Array<uiVarType> = [
    {
        A:{
            title:'',
            text:''
        }

    },
    {
        B: {
            title: '',
            text: ''
        }
    },
    {
        C: {
            title: '',
            text: ''
        }
    }
]

export const KarmicVar: Array<uiVarType> = [
    {D: {
            title:'',
            text:''
        }},
    {G: {
            title:'',
            text:''
        }},
    {F: {
            title:'',
            text:''
        }}
]

export const Someone: Array<uiVarType> = [
    {V:{
            title:'',
            text:''
        }},
    {W: {
            title:'',
            text:''
        }},
    {X: {
            title:'',
            text:''
        }}
]

export const SomeonePowerVar: Array<uiVarType> = [
    {E: {
            title:'',
            text:''
        }},
]

export const EnergyVar: Array<uiVarType> = [
    {HH: {
            title:'',
            text:''
        }},
]

export type contentType={
    title: string
    text: string
}

export type uiVarType = {
    [key: string]: contentType
}

export function TalentsArray(x: Array<uiVarType>, y: ObjType, dateValue: Array<string>, t: Array<contentType>) {
    if (dateValue.length < 3) return
    let newArr: any  = []
    for (let i = 0; i < x.length; i++) {
        newArr = [...newArr, {[`${Object.keys(x[i])}`]: DiffCase(y(dateValue)[`${Object.keys(x[i])}`](), t)}]
        }

    return newArr
}

export const DiffCase = (x: number, y: Array<contentType>) => {
    for (let i = 0; i < y.length; i++) {
        if (x - 1 === i) {
            return y[i]
        }
    }
}




