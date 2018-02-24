import {Injectable} from '@angular/core';
@Injectable()
export class BankList
{
	public list = ['IndusInd Bank','HDFC Bank'];
}

export class YearList
{
	private y = new Date();
	private y1 = this.y.getFullYear();
	public year=[];
	public years()
	{
		for (var i = this.y1; i < (this.y1+30); i++)
		{
			this.year.push(i);
		}
		return this.year;
	}

}