import { Component, OnInit } from '@angular/core';
import { PackageModel } from 'src/app/models/Stock-modules/package.module';
import { PackageService } from 'src/app/service/stock-service/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit{
  packages: PackageModel[] = []

  constructor(private packageService: PackageService) {
  }

  ngOnInit(): void {
      this.packageService.fetchPackages().subscribe({
          next: (data) => {
              console.log(data);
              this.packages = data;
          },
          error: (err) => console.log(err)
      });
  }

  deletePackage(packageId: number) {
      if (!confirm('Delete this package?')) return;
      this.packages = this.packages.filter(p => p.id !== packageId);
      this.packageService.deletePackage(packageId).subscribe();
  }

  preparePackage(packageId: number) {
      if (!confirm('Prepare this package?')) return;
      this.packages.map(p => {
          if (p.id === packageId) {
              p.packageState = 'PREPARED';
              p.packagingDate = new Date().toLocaleString();
          }
          return p;
      });
      this.packageService.preparePackage(packageId).subscribe();

  }

  exportPackage(packageId: number) {
      if (!confirm('Export this package?')) return;
      this.packages.map(p => {
          if (p.id === packageId) {
              p.packageState = 'EXPORTED';
              p.exportDate = new Date().toLocaleString();
          }
          return p;
      });
      this.packageService.exportPackage(packageId).subscribe();

  }

  getFormattedDate(date: string) {
      if (date === null) {
          return '...';
      }
      const formattedDate = new Date(date);
      return formattedDate.toLocaleString();
  }
}
