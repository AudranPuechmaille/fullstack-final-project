import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.css']
})
export class UserTypeListComponent implements OnInit {

  userTypes: any[] = [];

  constructor(private userTypeService: UserTypeService) { }

  ngOnInit(): void {
    this.loadUserTypes();
  }

  loadUserTypes() {
    this.userTypeService.getUserTypes().subscribe(data => {
      this.userTypes = data;
    });
  }

  deleteUserType(id: number) {
    this.userTypeService.deleteUserType(id).subscribe(response => {
      this.userTypes = this.userTypes.filter(userType => userType.id !== id);
    });
  }
}

