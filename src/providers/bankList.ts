import {Injectable} from '@angular/core';
@Injectable()
export class BankList
{
	public list = [
					'Allahabad Bank',
					'Axis Bank',
					'Canara Bank',
					'City Union Bank',
					'Dhanalaxmi Bank',
					'Federal Bank',
					'HDFC Bank',
					'ICICI Bank',
					'IDBI Bank',
					'Indian Bank',
					'IndusInd Bank',
					'Indian Overseas Bank',
					'Karnataka Bank',
					'Karur Vysya Bank',
					'Laxmi Vilas Bank',
					'Punjab National Bank',
					'State Bank of India',
					'South Indian Bank',
					'Tamilnadu Mercantile Bank',
					'Vijaya Bank',
					'Yes Bank',
					];
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