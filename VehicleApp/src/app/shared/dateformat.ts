import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { isNumber } from 'util';

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {

        if (value) {
            const dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { day: this.toInteger(dateParts[0]), month: null, year: null };
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: null };
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: this.toInteger(dateParts[2]) };
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        return date ?
            `${isNumber(date.day) ? this.padNumber(date.day) : ''}/${isNumber(date.month) ? this.padNumber(date.month) : ''}/${date.year}` :
            '';
    }

    toInteger(value: any): number {
        return parseInt(`${value}`, 10);
    }

    isNumber(value: any): value is number {
        return !isNaN(this.toInteger(value));
    }

    isInteger(value: any): value is number {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    }

    padNumber(value: number) {
        if (isNumber(value)) {
            return `0${value}`.slice(-2);
        } else {
            return '';
        }
    }

    ngbDateToString(ngbDate: NgbDateStruct): string {
        if(ngbDate==null){return null;}
        return ngbDate.day + '/' + ngbDate.month + '/' + ngbDate.year;
    }

    stringToNgbDate(date: string): NgbDateStruct {
        if(date==null){return null;}
        let myDate: Date = new Date(date);
        let ngbDate: NgbDateStruct = {
            year: myDate.getFullYear(),
            month: myDate.getMonth() + 1,
            day: myDate.getDate()
        };
        return ngbDate;
    }

}
