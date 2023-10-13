import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

const MOCK_DATA = {
  SUCCESS: [
    { src: 'http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=Carousel' },
  ],
  ERROR: [
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO1' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO2' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO3' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO4' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO5' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO6' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO7' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO8' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO9' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO10' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO11' },
  ],
};

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.data = MOCK_DATA.SUCCESS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log an error if the number of images exceeds the maximum length of 10', () => {
    spyOn(console, 'error');
    component.data = MOCK_DATA.ERROR;
    fixture.detectChanges();
    expect(console.error).toHaveBeenCalledWith(new Error(`maximum length of 10 has been exceeded`));
  });
});
