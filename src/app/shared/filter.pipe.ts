import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (filterString === '') {
      return value;
    } else {
      const filteredNotes = value.filter(note => {
        return note.title.toLowerCase().includes(filterString.toLowerCase())
          || note.content.toLowerCase().includes(filterString.toLowerCase());
      });
      return filteredNotes;
    }
  }

}
